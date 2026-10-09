import { JOB_STATUS_LABELS, type JobStatus } from "@/lib/constants";

const colors: Record<JobStatus, string> = {
  received: "bg-sky-100 text-sky-800",
  diagnosing: "bg-violet-100 text-violet-800",
  awaiting_approval: "bg-amber-100 text-amber-800",
  waiting_parts: "bg-orange-100 text-orange-800",
  repairing: "bg-indigo-100 text-indigo-800",
  ready: "bg-emerald-100 text-emerald-800",
  done: "bg-zinc-200 text-zinc-700",
  cancelled: "bg-red-100 text-red-700",
};

export function StatusBadge({ status }: { status: JobStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[status]}`}
    >
      {JOB_STATUS_LABELS[status]}
    </span>
  );
}
