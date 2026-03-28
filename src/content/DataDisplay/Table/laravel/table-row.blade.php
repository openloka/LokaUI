<tr {{ $attributes->merge(['class' => 'transition-colors hover:bg-[var(--bg-hover)] odd:bg-transparent even:bg-[var(--bg-subtle)]/50']) }}>
    {{ $slot }}
</tr>
