// pages/index.js

export default function Home() {
  // The page will not render anything since we are handling redirect server-side.
  return null;
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { code } = query; // Get the 'code' parameter from the query string

  // If 'code' is provided, redirect to the SMS link
  if (code) {
    return {
      redirect: {
        destination: `sms://888222/;?&body=${encodeURIComponent(code)}`,
        permanent: false,
      }
    };
  }

  // No 'code' provided, return an empty props object
  return { props: {} };
}
