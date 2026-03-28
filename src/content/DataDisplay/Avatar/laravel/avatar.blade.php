@props([
    'size' => 'md',
    'src' => '',
    'fallback' => '',
])

@php
$sizeClasses = [
    'sm' => 'w-8 h-8 text-xs',
    'md' => 'w-10 h-10 text-sm',
    'lg' => 'w-14 h-14 text-base',
];

$base = 'relative inline-flex items-center justify-center rounded-full overflow-hidden select-none font-medium shrink-0';
$base .= ' bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border)]';
$classes = $base . ' ' . ($sizeClasses[$size] ?? $sizeClasses['md']);
@endphp

<span {{ $attributes->merge(['class' => $classes]) }}>
    @if($src)
        <img
            src="{{ $src }}"
            alt="{{ $fallback }}"
            class="w-full h-full object-cover"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <span class="absolute inset-0 items-center justify-center" style="display:none;">
            {{ $fallback }}
        </span>
    @else
        {{ $fallback }}
    @endif
</span>
