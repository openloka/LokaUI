@props([
    'header' => false,
])

@if($header)
    <th {{ $attributes->merge(['class' => 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]']) }}>
        {{ $slot }}
    </th>
@else
    <td {{ $attributes->merge(['class' => 'px-4 py-3 text-[var(--text-primary)]']) }}>
        {{ $slot }}
    </td>
@endif
