@props([
    'variant' => 'default',
    'size' => 'md',
])

@php
$variantClasses = [
    'default'  => 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]',
    'success'  => 'bg-[var(--green-muted)] text-[var(--green)] border-[var(--green)]',
    'warning'  => 'bg-[var(--amber-muted)] text-[var(--amber)] border-[var(--amber)]',
    'error'    => 'bg-[var(--red-muted)] text-[var(--red)] border-[var(--red)]',
    'info'     => 'bg-[var(--blue-muted)] text-[var(--blue)] border-[var(--blue)]',
];

$sizeClasses = [
    'sm' => 'px-2 py-0.5 text-xs',
    'md' => 'px-2.5 py-1 text-xs',
];

$base = 'inline-flex items-center font-medium rounded-full border border-opacity-30';
$classes = $base
    . ' ' . ($variantClasses[$variant] ?? $variantClasses['default'])
    . ' ' . ($sizeClasses[$size] ?? $sizeClasses['md']);
@endphp

<span {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</span>
