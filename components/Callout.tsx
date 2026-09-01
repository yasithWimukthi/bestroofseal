type Props = {
    children: React.ReactNode;
};

export default function Callout({ children }: Props) {
    return (
        <div className="my-8 rounded-xl border-l-4 border-green-600 bg-green-50 p-5">
            <p className="text-green-900">{children}</p>
        </div>
    );
}