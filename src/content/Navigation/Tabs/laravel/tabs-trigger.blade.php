@props([
    'value' => '',
])

<button
    type="button"
    role="tab"
    :aria-selected="activeTab === '{{ $value }}'"
    @click="activeTab = '{{ $value }}'"
    :class="{
        'px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-none': true,
        'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm': variant === 'default' && activeTab === '{{ $value }}',
        'text-[var(--text-muted)] hover:text-[var(--text-primary)]': variant === 'default' && activeTab !== '{{ $value }}',
        'bg-[var(--accent)] text-white': variant === 'pills' && activeTab === '{{ $value }}',
        'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-md px-3 py-1.5': variant === 'pills' && activeTab !== '{{ $value }}',
        'border-b-2 border-[var(--accent)] text-[var(--text-primary)] -mb-px rounded-none px-4 py-2': variant === 'underline' && activeTab === '{{ $value }}',
        'border-b-2 border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] -mb-px rounded-none px-4 py-2': variant === 'underline' && activeTab !== '{{ $value }}',
    }"
    {{ $attributes }}
>
    {{ $slot }}
</button>
