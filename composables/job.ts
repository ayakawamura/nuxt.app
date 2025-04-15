import type { Job } from '~/types/job'

export const useJob = () => {
  const job = useState<Job | null>('job', () => null)

  const setJob = (newJob: Job | null) => {
    job.value = newJob
  }

  return {
    job: readonly(job),
    setJob
  }
}
