@props([
    'checked' => false,
    'disabled' => false,
    'label' => '',
    'name' => '',
    'value' => '',
])

@php
$id = 'radio-' . uniqid();
@endphp

<label for="{{ $id }}" class="inline-flex items-center gap-2.5 {{ $disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer' }}">
    <span class="relative flex items-center justify-center w-4 h-4 shrink-0">
        <input
            id="{{ $id }}"
            type="radio"
            name="{{ $name }}"
            value="{{ $value }}"
            class="sr-only peer"
            {{ $attributes }}
            @if($checked) checked @endif
            @if($disabled) disabled @endif
        />
        <span class="w-full h-full rounded-full border transition-colors
            border-[var(--border)] bg-[var(--bg-input)]
            peer-checked:border-[var(--accent)]
            peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent)] peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-[var(--bg)]"></span>
        <span class="absolute w-2 h-2 rounded-full bg-[var(--accent)] scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></span>
    </span>
    @if($label)
        <span class="text-sm text-[var(--text-primary)] select-none">{{ $label }}</span>
    @endif
</label>
