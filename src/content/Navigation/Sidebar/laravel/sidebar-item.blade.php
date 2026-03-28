@props([
    'href' => '#',
    'active' => false,
])

<a
    href="{{ $href }}"
    :class="collapsed ? 'justify-center px-0' : 'px-3'"
    class="flex items-center gap-2.5 py-2 rounded-md text-sm font-medium transition-colors
        {{ $active
            ? 'bg-[var(--accent)] text-white'
            : 'text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
        }}"
    {{ $attributes }}
>
    @isset($icon)
        <span class="flex-shrink-0 w-4 h-4 flex items-center justify-center">
            {{ $icon }}
        </span>
    @endisset

    <span x-show="!collapsed" class="truncate">{{ $slot }}</span>
</a>
