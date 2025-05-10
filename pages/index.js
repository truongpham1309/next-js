import Link from 'next/link';

export default function Home() {
  return (
    <>
      Home Page <br />
      <Link href={'posts/first-post'}>Post</Link>
    </>
  );
}
