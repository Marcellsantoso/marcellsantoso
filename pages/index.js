import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import '@builder.io/widgets';
import '@builder.io/widgets/dist/lib/builder-widgets-async'


// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init("b8d602ecf27b40c6a613fc60a3e1012d");

export async function getStaticProps({ params }) {
    const homepage = await builder.get('homepage').toPromise();
    return {
        props: {
            homepage: homepage || null,
        },
    };
}

export function test() {
    console.log('hehe');
}

export default function Page({ homepage }) {
    let asd = "none";
    return (
        <>
            <div className="gradient">
                {/* Put your header here. */}
                <BuilderComponent model="homepage" content={homepage}
                    data={{
                        asd: asd
                    }
                    }
                />
            </div >
            {/* Put your footer here. */}
        </>
    );
}
