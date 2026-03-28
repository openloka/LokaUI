@props([
    'value' => '',
])

<div
    role="tabpanel"
    x-show="activeTab === '{{ $value }}'"
    x-transition:enter="transition-opacity duration-150"
    x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100"
    style="display: none;"
    {{ $attributes->merge(['class' => 'mt-3 text-sm text-[var(--text-primary)]']) }}
>
    {{ $slot }}
</div>
