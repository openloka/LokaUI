@props([
    'name' => '',
])

<div role="radiogroup" {{ $attributes }}>
    {{ $slot }}
</div>
