@props([
    'collapsed' => false,
    'width' => 'md',
])

@php
$widthClasses = [
    'sm' => 'w-48',
    'md' => 'w-60',
    'lg' => 'w-72',
];

$collapsedWidth = 'w-14';
@endphp

<aside
    x-data="{ collapsed: @js($collapsed) }"
    :class="collapsed ? '{{ $collapsedWidth }}' : '{{ $widthClasses[$width] ?? $widthClasses['md'] }}'"
    class="flex flex-col h-full bg-[var(--bg-card)] border-r border-[var(--border)] transition-all duration-200 overflow-hidden"
    {{ $attributes }}
>
    <nav class="flex flex-col flex-1 gap-1 p-2 overflow-y-auto">
        {{ $slot }}
    </nav>
</aside>
