@props([
    'total' => 10,
    'current' => 1,
    'siblingCount' => 1,
])

@php
$total = (int) $total;
$current = (int) $current;
$siblingCount = (int) $siblingCount;

// Compute the range of pages to show
$rangeStart = max(2, $current - $siblingCount);
$rangeEnd = min($total - 1, $current + $siblingCount);

$pages = [];

// Always show first page
$pages[] = ['type' => 'page', 'value' => 1];

// Left ellipsis
if ($rangeStart > 2) {
    $pages[] = ['type' => 'ellipsis'];
}

// Sibling pages (excluding first and last)
for ($i = $rangeStart; $i <= $rangeEnd; $i++) {
    $pages[] = ['type' => 'page', 'value' => $i];
}

// Right ellipsis
if ($rangeEnd < $total - 1) {
    $pages[] = ['type' => 'ellipsis'];
}

// Always show last page (if more than 1 page)
if ($total > 1) {
    $pages[] = ['type' => 'page', 'value' => $total];
}

$baseClass = 'inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-md text-sm font-medium transition-colors';
$activeClass = 'bg-[var(--accent)] text-white';
$inactiveClass = 'text-[var(--text-primary)] hover:bg-[var(--bg-hover)]';
$disabledClass = 'text-[var(--text-muted)] cursor-not-allowed opacity-50';
$navClass = 'inline-flex items-center justify-center w-8 h-8 rounded-md text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
@endphp

<nav aria-label="Pagination" class="flex items-center gap-1">
    {{-- Previous button --}}
    @if($current > 1)
        <a href="?page={{ $current - 1 }}" class="{{ $navClass }}" aria-label="Previous page">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    @else
        <span class="{{ $navClass }} opacity-50 cursor-not-allowed" aria-disabled="true">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    @endif

    {{-- Page numbers --}}
    @foreach($pages as $page)
        @if($page['type'] === 'ellipsis')
            <span class="{{ $baseClass }} text-[var(--text-muted)] cursor-default px-1">…</span>
        @else
            @if($page['value'] === $current)
                <span class="{{ $baseClass }} {{ $activeClass }}" aria-current="page">{{ $page['value'] }}</span>
            @else
                <a href="?page={{ $page['value'] }}" class="{{ $baseClass }} {{ $inactiveClass }}">{{ $page['value'] }}</a>
            @endif
        @endif
    @endforeach

    {{-- Next button --}}
    @if($current < $total)
        <a href="?page={{ $current + 1 }}" class="{{ $navClass }}" aria-label="Next page">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    @else
        <span class="{{ $navClass }} opacity-50 cursor-not-allowed" aria-disabled="true">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    @endif
</nav>
