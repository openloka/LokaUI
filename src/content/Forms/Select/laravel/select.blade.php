@props([
    'placeholder' => 'Select...',
    'disabled' => false,
    'size' => 'md',
])

@php
$sizeClasses = [
    'sm' => 'px-2.5 py-1.5 text-xs',
    'md' => 'px-3 py-2 text-sm',
    'lg' => 'px-4 py-2.5 text-base',
];

$base = 'w-full rounded-lg border transition-colors outline-none appearance-none';
$base .= ' bg-[var(--bg-input)] text-[var(--text-primary)]';
$base .= ' border-[var(--border)] hover:border-[var(--border-hover)]';
$base .= ' focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';
$base .= ' disabled:opacity-50 disabled:cursor-not-allowed';
$base .= ' pr-8';

$classes = $base . ' ' . ($sizeClasses[$size] ?? $sizeClasses['md']);
@endphp

<div class="relative inline-block w-full">
    <select
        {{ $attributes->merge(['class' => $classes]) }}
        @if($disabled) disabled @endif
    >
        @if($placeholder)
            <option value="" disabled selected hidden>{{ $placeholder }}</option>
        @endif
        {{ $slot }}
    </select>
    <span class="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-[var(--text-muted)]">
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
</div>
