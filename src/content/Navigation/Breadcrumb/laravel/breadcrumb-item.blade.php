@props([
    'href' => null,
    'active' => false,
])

<li class="flex items-center">
    <span
        x-html="separatorHtml"
        class="flex items-center [li:first-child_&]:hidden"
    ></span>

    @if($active || !$href)
        <span
            class="font-medium text-[var(--text-primary)]"
            aria-current="page"
        >{{ $slot }}</span>
    @else
        <a
            href="{{ $href }}"
            class="hover:text-[var(--text-primary)] transition-colors"
        >{{ $slot }}</a>
    @endif
</li>
