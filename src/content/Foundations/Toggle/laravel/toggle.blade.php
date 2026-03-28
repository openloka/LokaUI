@props([
    'checked' => false,
    'disabled' => false,
    'label' => '',
])

@php
$id = 'toggle-' . uniqid();
@endphp

<label for="{{ $id }}" class="inline-flex items-center gap-3 {{ $disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer' }}">
    <span class="relative inline-block w-10 h-6">
        <input
            id="{{ $id }}"
            type="checkbox"
            class="sr-only peer"
            {{ $attributes }}
            @if($checked) checked @endif
            @if($disabled) disabled @endif
        />
        <span class="block w-full h-full rounded-full transition-colors bg-[var(--toggle-bg)] peer-checked:bg-[var(--accent)]"></span>
        <span class="absolute top-1 left-1 w-4 h-4 rounded-full transition-transform bg-[var(--toggle-knob)] peer-checked:translate-x-4"></span>
    </span>
    @if($label)
        <span class="text-sm text-[var(--text-primary)]">{{ $label }}</span>
    @endif
</label>
