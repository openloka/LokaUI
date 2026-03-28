@props([
    'variant' => 'info',
    'dismissible' => false,
])

@php
$variantClasses = [
    'info'    => 'bg-[var(--blue-subtle,#eff6ff)] border-[var(--blue-border,#bfdbfe)] text-[var(--blue,#3b82f6)]',
    'success' => 'bg-[var(--green-subtle,#f0fdf4)] border-[var(--green-border,#bbf7d0)] text-[var(--green,#22c55e)]',
    'warning' => 'bg-[var(--yellow-subtle,#fefce8)] border-[var(--yellow-border,#fef08a)] text-[var(--yellow,#eab308)]',
    'error'   => 'bg-[var(--red-subtle,#fef2f2)] border-[var(--red-border,#fecaca)] text-[var(--red,#ef4444)]',
];

$icons = [
    'info'    => '<path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />',
    'success' => '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />',
    'warning' => '<path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />',
    'error'   => '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />',
];

$variantClass = $variantClasses[$variant] ?? $variantClasses['info'];
$iconPath = $icons[$variant] ?? $icons['info'];
@endphp

<div
    x-data="{{ $dismissible ? '{ visible: true }' : '' }}"
    @if($dismissible) x-show="visible" @endif
    {{ $attributes->merge(['class' => 'flex items-start gap-3 rounded-lg border p-4 ' . $variantClass]) }}
    role="alert"
>
    <svg class="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        {!! $iconPath !!}
    </svg>

    <div class="flex-1 text-sm font-medium text-[var(--text-primary)]">
        {{ $slot }}
    </div>

    @if($dismissible)
        <button
            @click="visible = false"
            class="ml-auto -mr-1 -mt-0.5 rounded p-1 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
        >
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
    @endif
</div>
