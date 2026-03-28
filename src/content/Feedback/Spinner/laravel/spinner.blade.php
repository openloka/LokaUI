@props([
    'size' => 'md',
    'color' => 'accent',
])

@php
$sizeClasses = [
    'sm' => 'w-4 h-4 border-2',
    'md' => 'w-6 h-6 border-2',
    'lg' => 'w-9 h-9 border-[3px]',
];

$colorClasses = [
    'accent'  => 'border-[var(--accent)] border-r-transparent',
    'white'   => 'border-white border-r-transparent',
    'current' => 'border-current border-r-transparent',
];

$sizeClass = $sizeClasses[$size] ?? $sizeClasses['md'];
$colorClass = $colorClasses[$color] ?? $colorClasses['accent'];
@endphp

<span
    {{ $attributes->merge(['class' => 'inline-block rounded-full animate-spin ' . $sizeClass . ' ' . $colorClass]) }}
    role="status"
    aria-label="Loading"
></span>
