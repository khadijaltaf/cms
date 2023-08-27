import React, { useEffect, useState } from 'react';

const cachedScriptStatuses = {};

function getScriptNode(src) {
  const node = document.querySelector(`script[src="${src}"]`);
  const status = node ? node.getAttribute('data-status') : null;
  return {
    node,
    status,
  };
}

function useScript(src) {
  const [status, setStatus] = useState(() => {
    if (typeof window === 'undefined') {
      return 'loading';
    }

    return cachedScriptStatuses[src] ?? 'loading';
  });

  useEffect(() => {
    const cachedScriptStatus = cachedScriptStatuses[src];
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      // If the script is already cached, set its status immediately
      setStatus(cachedScriptStatus);
      return;
    }

    const script = getScriptNode(src);
    let scriptNode = script.node;

    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.src = src;
      scriptNode.async = true;
      scriptNode.setAttribute('data-status', 'loading');
      document.body.appendChild(scriptNode);

      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === 'load' ? 'ready' : 'error';
        scriptNode?.setAttribute('data-status', scriptStatus);
      };

      scriptNode.addEventListener('load', setAttributeFromEvent);
      scriptNode.addEventListener('error', setAttributeFromEvent);
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? 'loading');
    }

    const setStateFromEvent = (event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error';
      setStatus(newStatus);
      cachedScriptStatuses[src] = newStatus;
    };

    scriptNode.addEventListener('load', setStateFromEvent);
    scriptNode.addEventListener('error', setStateFromEvent);

    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent);
        scriptNode.removeEventListener('error', setStateFromEvent);
      }

      if (scriptNode) {
        try {
          scriptNode.remove();
        } catch (error) {
          // ignore error
        }
      }
    };
  }, [src]);

  return status;
}

function ExampleComponent() {
  const status = useScript('https://unpkg.com/feather-icons');

  // You can use the status returned by the hook to manage the component's behavior based on script loading status
  // For example, you might want to conditionally render content once the script is loaded (status === 'ready')

  return (
    <div>
      Script Load Status: {status}
    </div>
  );
}

export default ExampleComponent;
