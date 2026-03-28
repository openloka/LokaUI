@php
$variantClasses = [
    'default'   => 'inline-flex items-center gap-1 rounded-lg bg-[var(--bg-subtle)] p-1',
    'pills'     => 'inline-flex items-center gap-2',
    'underline' => 'inline-flex items-center border-b border-[var(--border)] w-full',
];
@endphp

<div
    role="tablist"
    :class="{
        'inline-flex items-center gap-1 rounded-lg bg-[var(--bg-subtle)] p-1': variant === 'default',
        'inline-flex items-center gap-2': variant === 'pills',
        'inline-flex items-center border-b border-[var(--border)] w-full': variant === 'underline',
    }"
    {{ $attributes }}
>
    {{ $slot }}
</div>
