@props([
    'type' => 'text',
    'placeholder' => '',
    'disabled' => false,
    'error' => false,
])

@php
$base = 'w-full px-3 py-2 text-sm rounded-lg border transition-colors outline-none';
$base .= ' bg-[var(--bg-input)] text-[var(--text-primary)] placeholder-[var(--text-muted)]';
$base .= ' focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';
$base .= ' disabled:opacity-50 disabled:cursor-not-allowed';

$borderClass = $error
    ? 'border-[var(--red)]'
    : 'border-[var(--border)] hover:border-[var(--border-hover)]';

$classes = $base . ' ' . $borderClass;
@endphp

<input
    type="{{ $type }}"
    placeholder="{{ $placeholder }}"
    {{ $attributes->merge(['class' => $classes]) }}
    @if($disabled) disabled @endif
/>
