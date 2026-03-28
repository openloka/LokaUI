@props([
    'separator' => 'chevron',
])

@php
$separatorHtml = match($separator) {
    'slash' => '<span class="mx-1.5 text-[var(--text-muted)]">/</span>',
    'dot'   => '<span class="mx-1.5 text-[var(--text-muted)]">·</span>',
    default => '<svg class="mx-1.5 w-3.5 h-3.5 text-[var(--text-muted)]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
@endphp

<nav aria-label="Breadcrumb">
    <ol
        class="flex items-center flex-wrap gap-y-1 text-sm text-[var(--text-muted)]"
        x-data="{ separatorHtml: @js($separatorHtml) }"
        data-separator="{{ $separator }}"
    >
        {{ $slot }}
    </ol>
</nav>
