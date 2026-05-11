interface DataRow {
  label: string
  value: string
  unit?: string
  notes?: string
}

interface DataTableProps {
  rows: DataRow[]
  className?: string
}

export function DataTable({ rows, className = "" }: DataTableProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border ${className}`}>
      <table className="w-full">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`border-b border-border last:border-0 ${
                i % 2 === 0 ? "bg-bg-card" : "bg-bg-elevated"
              }`}
            >
              <td className="px-4 py-3 w-1/2">
                <span className="text-sm text-text-secondary">{row.label}</span>
                {row.notes && (
                  <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{row.notes}</p>
                )}
              </td>
              <td className="px-4 py-3 text-right">
                <span className="font-mono text-sm font-medium text-text-primary">{row.value}</span>
                {row.unit && (
                  <span className="font-mono text-xs text-text-muted ml-1">{row.unit}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
