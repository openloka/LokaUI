@props([
    'open' => false,
    'side' => 'right',
])

@php
$panelPosition = match($side) {
    'left'  => 'left-0 top-0 h-full',
    default => 'right-0 top-0 h-full',
};
$enterStart = match($side) {
    'left'  => '-translate-x-full',
    default => 'translate-x-full',
};
@endphp

<div x-data="{ open: @js($open) }" @keydown.escape.window="open = false">
    @isset($trigger)
        <div @click="open = true">{{ $trigger }}</div>
    @endisset

    <div
        x-show="open"
        x-transition:enter="transition-opacity duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition-opacity duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-50"
        style="display: none;"
    >
        <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            @click="open = false"
        ></div>

        <div
            class="absolute {{ $panelPosition }} z-10 w-80 border-[var(--border)] bg-[var(--bg-card)] shadow-xl {{ $side === 'left' ? 'border-r' : 'border-l' }}"
            x-transition:enter="transition duration-300"
            x-transition:enter-start="{{ $enterStart }}"
            x-transition:enter-end="translate-x-0"
            x-transition:leave="transition duration-200"
            x-transition:leave-start="translate-x-0"
            x-transition:leave-end="{{ $enterStart }}"
        >
            <div class="flex items-center justify-{{ $side === 'left' ? 'end' : 'start' }} p-4 border-b border-[var(--border)]">
                <button
                    @click="open = false"
                    class="rounded-md p-1 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors"
                >
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>

            <div class="p-4 overflow-y-auto h-[calc(100%-57px)]">
                {{ $slot }}
            </div>
        </div>
    </div>
</div>
