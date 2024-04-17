import { useFormStatus } from '@/react-dom-shim'
import { Button } from '../ui/button'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type="submit">
      {pending ? ' Saving...' : 'Save'}
    </Button>
  )
}
