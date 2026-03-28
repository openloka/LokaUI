@props([
    'variant' => 'text',
    'width' => '100%',
    'height' => '1rem',
])

@php
$variantClasses = [
    'text'        => 'rounded',
    'circular'    => 'rounded-full',
    'rectangular' => 'rounded-lg',
];

$shapeClass = $variantClasses[$variant] ?? $variantClasses['text'];
@endphp

<div
    {{ $attributes->merge(['class' => 'animate-pulse bg-[var(--bg-subtle)] ' . $shapeClass]) }}
    style="width: {{ $width }}; height: {{ $height }};"
    aria-hidden="true"
></div>
