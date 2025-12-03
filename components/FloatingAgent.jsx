import { useEffect, useRef } from 'react';

const FloatingAgent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        // Load the ElevenLabs script if not already loaded
        if (!document.querySelector('script[src*="convai-widget-embed"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
            script.async = true;
            script.type = 'text/javascript';
            document.head.appendChild(script);
        }

        // Create the custom element
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_6801k5gdcqswfbbt3beqd7d26fmn');

        // Append to container
        node.appendChild(widget);

        // Cleanup function
        return () => {
            if (node && widget && node.contains(widget)) {
                node.removeChild(widget);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed bottom-6 right-6 z-50 w-72 h-96 md:w-80 md:h-[400px]"
            style={{
                maxWidth: '90vw',
                maxHeight: '70vh'
            }}
        />
    );
};

export default FloatingAgent;