@props([
    'checked' => false,
    'disabled' => false,
    'label' => '',
])

@php
$id = 'checkbox-' . uniqid();
@endphp

<label for="{{ $id }}" class="inline-flex items-center gap-2.5 {{ $disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer' }}">
    <span class="relative flex items-center justify-center w-4 h-4 shrink-0">
        <input
            id="{{ $id }}"
            type="checkbox"
            class="sr-only peer"
            {{ $attributes }}
            @if($checked) checked @endif
            @if($disabled) disabled @endif
        />
        <span class="w-full h-full rounded border transition-colors
            border-[var(--border)] bg-[var(--bg-input)]
            peer-checked:bg-[var(--accent)] peer-checked:border-[var(--accent)]
            peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent)] peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-[var(--bg)]"></span>
        <svg class="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 5L3.83333 7.5L8.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
    @if($label)
        <span class="text-sm text-[var(--text-primary)] select-none">{{ $label }}</span>
    @endif
</label>
