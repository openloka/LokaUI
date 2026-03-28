@props([
    'open' => false,
    'side' => 'bottom',
])

@php
$positionClasses = match($side) {
    'top'   => 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    'left'  => 'right-full top-1/2 -translate-y-1/2 mr-2',
    'right' => 'left-full top-1/2 -translate-y-1/2 ml-2',
    default => 'top-full left-1/2 -translate-x-1/2 mt-2',
};
@endphp

<div
    class="relative inline-block"
    x-data="{ open: @js($open) }"
    @click.away="open = false"
    @keydown.escape.window="open = false"
>
    @isset($trigger)
        <div @click="open = !open">{{ $trigger }}</div>
    @endisset

    <div
        x-show="open"
        x-transition:enter="transition duration-150"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition duration-100"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-95"
        class="absolute {{ $positionClasses }} z-50 min-w-48 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-3 shadow-lg"
        style="display: none;"
    >
        {{ $slot }}
    </div>
</div>
