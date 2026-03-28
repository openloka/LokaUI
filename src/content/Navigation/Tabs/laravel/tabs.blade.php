@props([
    'defaultValue' => '',
    'variant' => 'default',
])

<div
    x-data="{ activeTab: '{{ $defaultValue }}', variant: '{{ $variant }}' }"
    {{ $attributes->merge(['class' => 'w-full']) }}
>
    {{ $slot }}
</div>
