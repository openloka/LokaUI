@props([
    'variant' => 'default',
    'padding' => 'md',
])

@php
$variantClasses = [
    'default'  => 'bg-[var(--bg-card)] border border-[var(--border)]',
    'outlined' => 'bg-transparent border border-[var(--border)]',
    'elevated' => 'bg-[var(--bg-card)] border border-[var(--border)] shadow-lg',
];

$paddingClasses = [
    'sm' => 'p-3',
    'md' => 'p-5',
    'lg' => 'p-7',
];

$base = 'rounded-xl text-[var(--text-primary)]';
$classes = $base
    . ' ' . ($variantClasses[$variant] ?? $variantClasses['default'])
    . ' ' . ($paddingClasses[$padding] ?? $paddingClasses['md']);
@endphp

<div {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</div>
