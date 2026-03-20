export function fuzzyMatch(query, text) {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  if (t.includes(q)) return { match: true, score: t.indexOf(q) === 0 ? 2 : 1 }
  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return { match: qi === q.length, score: 0 }
}

export function searchComponents(query, categories) {
  if (!query.trim()) return []
  const results = []
  for (const cat of categories) {
    if (cat.isDoc) continue
    for (const sub of cat.subcategories) {
      const nameMatch = fuzzyMatch(query, sub.name)
      const catMatch = fuzzyMatch(query, cat.name)
      if (nameMatch.match || catMatch.match) {
        results.push({ name: sub.name, category: cat.name, slug: `/${cat.slug}/${sub.slug}`, score: nameMatch.score + catMatch.score })
      }
    }
  }
  return results.sort((a, b) => b.score - a.score)
}
