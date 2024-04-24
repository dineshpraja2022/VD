export function Modal({children}) {
    return (
        <div className="relative z-20 overflow-scroll ">
            <div className="fixed inset-0 bg-black/20" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex  h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}