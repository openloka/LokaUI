@props([
    'striped' => false,
    'bordered' => false,
])

<div {{ $attributes->merge(['class' => 'w-full overflow-x-auto rounded-lg border border-[var(--border)]']) }}>
    <table
        class="w-full text-sm text-[var(--text-primary)]"
        x-data="{ striped: @js($striped), bordered: @js($bordered) }"
    >
        {{ $slot }}
    </table>
</div>
