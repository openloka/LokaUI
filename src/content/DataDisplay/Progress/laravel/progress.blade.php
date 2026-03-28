@props([
    'value' => 0,
    'variant' => 'default',
    'showLabel' => false,
])

@php
$variantClasses = [
    'default' => 'bg-[var(--accent)]',
    'success' => 'bg-[var(--green)]',
    'warning' => 'bg-[var(--yellow)]',
];

$clamped = max(0, min(100, (int) $value));
$barClass = $variantClasses[$variant] ?? $variantClasses['default'];
@endphp

<div {{ $attributes->merge(['class' => 'flex items-center gap-3 w-full']) }}>
    <div class="flex-1 h-2 rounded-full bg-[var(--bg-subtle)] overflow-hidden">
        <div
            class="h-full rounded-full transition-all duration-300 {{ $barClass }}"
            style="width: {{ $clamped }}%"
            role="progressbar"
            aria-valuenow="{{ $clamped }}"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    @if($showLabel)
        <span class="text-xs font-medium text-[var(--text-muted)] tabular-nums w-9 text-right shrink-0">
            {{ $clamped }}%
        </span>
    @endif
</div>
