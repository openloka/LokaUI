@props([
    'placeholder' => '',
    'rows' => 4,
    'disabled' => false,
    'resize' => 'vertical',
])

@php
$resizeClasses = [
    'none' => 'resize-none',
    'vertical' => 'resize-y',
    'both' => 'resize',
];

$base = 'w-full px-3 py-2 text-sm rounded-lg border transition-colors outline-none';
$base .= ' bg-[var(--bg-input)] text-[var(--text-primary)] placeholder-[var(--text-muted)]';
$base .= ' border-[var(--border)] hover:border-[var(--border-hover)]';
$base .= ' focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';
$base .= ' disabled:opacity-50 disabled:cursor-not-allowed';

$classes = $base . ' ' . ($resizeClasses[$resize] ?? $resizeClasses['vertical']);
@endphp

<textarea
    placeholder="{{ $placeholder }}"
    rows="{{ $rows }}"
    {{ $attributes->merge(['class' => $classes]) }}
    @if($disabled) disabled @endif
>{{ $slot }}</textarea>
