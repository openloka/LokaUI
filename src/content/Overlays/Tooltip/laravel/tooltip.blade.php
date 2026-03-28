@props([
    'content' => '',
    'side' => 'top',
])

@php
$tooltipPosition = match($side) {
    'bottom' => 'top-full left-1/2 -translate-x-1/2 mt-2',
    'left'   => 'right-full top-1/2 -translate-y-1/2 mr-2',
    'right'  => 'left-full top-1/2 -translate-y-1/2 ml-2',
    default  => 'bottom-full left-1/2 -translate-x-1/2 mb-2',
};
@endphp

<div class="relative inline-flex group">
    {{ $slot }}

    <div class="absolute {{ $tooltipPosition }} z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
        <div class="px-2.5 py-1.5 rounded-md text-xs font-medium text-white bg-[var(--bg-tooltip,#111827)] shadow-lg">
            {{ $content }}
        </div>
    </div>
</div>
