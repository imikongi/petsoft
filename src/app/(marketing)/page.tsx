import Image from 'next/image'
import Logo from '@/components/Logo';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={'bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10'}>
      <Image
        src={'https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png'}
        alt={'App preview'}
        width={519}
        height={472} />
      
      <div>
        <Logo/>
        <h1 className={'text-5xl font-semibold my-6 max-w-[500px]'}>
          Manage your <span className={'font-extrabold'}>pet daycare</span> with ease
        </h1>
        <p className={'text-2xl font-medium max-w-[600px]'}>
          Use PetSoft to easily keep track of pets under your care. Get lifetime access for 299$
        </p>
        
        <div className={'mt-10 space-x-3'}>
        <Button asChild>
          <Link href={'/sign-up'}>Get started</Link>
        </Button>
        <Button asChild variant={'secondary'}>
          <Link href={'log-in'}>Log in</Link>
        </Button>
        </div>
      </div>
    </main>
  );
}
