@props([
    'label' => '',
])

<div class="mb-2">
    @if($label)
        <p
            x-show="!collapsed"
            class="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
        >{{ $label }}</p>
    @endif

    <div class="flex flex-col gap-0.5">
        {{ $slot }}
    </div>
</div>
