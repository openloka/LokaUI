@props([
    'variant' => 'primary',
    'size' => 'md',
    'disabled' => false,
    'loading' => false,
])

@php
$variantClasses = [
    'primary' => 'bg-accent text-white hover:bg-accent-hover',
    'secondary' => 'bg-secondary text-secondary-text hover:bg-secondary-hover',
    'ghost' => 'bg-transparent text-text-primary hover:bg-bg-hover',
];

$sizeClasses = [
    'sm' => 'px-3 py-1.5 text-xs',
    'md' => 'px-4 py-2 text-sm',
    'lg' => 'px-6 py-2.5 text-base',
];

$base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors border border-transparent disabled:opacity-50 disabled:cursor-not-allowed';
$classes = $base . ' ' . ($variantClasses[$variant] ?? $variantClasses['primary']) . ' ' . ($sizeClasses[$size] ?? $sizeClasses['md']);
@endphp

<button
    {{ $attributes->merge(['class' => $classes]) }}
    @if($disabled || $loading) disabled @endif
>
    @if($loading)
        <span class="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin"></span>
    @endif
    {{ $slot }}
</button>
