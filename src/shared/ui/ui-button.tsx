import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export type UiButtonVariant = 'primary' | 'secondary' | 'outlined';
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'px-6 h-12 text-xl rounded cursor-pointer flex gap-2 justify-center items-center',
        {
          primary:
            'text-white bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 shadow shadow-cyan-600/40',
          secondary:
            'text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-600/40',
          outlined: 'border border-slate-300 hover:border-slate-500  disabled:opacity-50',
        }[variant],
      )}
    />
  );
}
