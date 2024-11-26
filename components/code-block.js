import { useState } from 'react';
import styles from './code-block.module.css';

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className={styles.codeBlockWrapper}>
      <div className={styles.codeHeader}>
        {language && <span className={styles.language}>{language}</span>}
        <button 
          onClick={copyToClipboard} 
          className={styles.copyButton}
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className={styles.codeContainer}>
        <div className={styles.lineNumbers}>
          {lines.map((_, i) => (
            <span key={i} className={styles.lineNumber}>
              {i + 1}
            </span>
          ))}
        </div>
        <pre className={styles.pre}>
          <code className={styles.code}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
