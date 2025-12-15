export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD harus berupa string JSON valid
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
