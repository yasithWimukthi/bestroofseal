import type { MDXComponents } from "mdx/types";

export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="mt-10 text-5xl font-bold text-slate-900">
                {children}
            </h1>
        ),

        h2: ({ children }) => (
            <h2 className="mt-12 text-3xl font-bold text-slate-900">
                {children}
            </h2>
        ),

        h3: ({ children }) => (
            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {children}
            </h3>
        ),

        p: ({ children }) => (
            <p className="mt-5 leading-8 text-gray-700">{children}</p>
        ),

        ul: ({ children }) => (
            <ul className="mt-4 list-disc space-y-2 pl-6">
                {children}
            </ul>
        ),

        strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">
                {children}
            </strong>
        ),

        ...components,
    };
}