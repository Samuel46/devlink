"use client";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { DropzoneInputProps, DropzoneRootProps, FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface FileWithPreview extends File {
	preview: string;
}
type Props = {
	setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
	files: FileWithPreview[];
};

export default function DropZone({ setFiles, files }: Props) {
	const onDrop = useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (acceptedFiles?.length) {
				setFiles((previousFiles) => [
					// ...previousFiles,
					...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
				]);
			}

			if (fileRejections?.length) {
				toast.error("Image too large!");
			}
		},
		[setFiles]
	);

	useEffect(() => {
		// Revoke the data uris to avoid memory leaks
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files]);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
	}: {
		getRootProps: () => DropzoneRootProps;
		getInputProps: () => DropzoneInputProps;
		isDragActive: boolean;
	} = useDropzone({
		accept: "image/*" as any,
		maxSize: 1024 * 1000,
		onDrop,
	});
	return (
		<div>
			<div className="w-full cursor-pointer flex items-center  gap-8">
				<div {...getRootProps()} className=" flex justify-center">
					{!files.length && (
						<div className="text-center flex flex-col items-center justify-center h-[193px] w-[193px] bg-purple-light rounded-md ">
							{!isDragActive && (
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M33.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V31.25C3.75 31.913 4.01339 32.5489 4.48223 33.0178C4.95107 33.4866 5.58696 33.75 6.25 33.75H33.75C34.413 33.75 35.0489 33.4866 35.5178 33.0178C35.9866 32.5489 36.25 31.913 36.25 31.25V8.75C36.25 8.08696 35.9866 7.45107 35.5178 6.98223C35.0489 6.51339 34.413 6.25 33.75 6.25ZM33.75 8.75V24.8047L29.6766 20.7328C29.4444 20.5006 29.1688 20.3164 28.8654 20.1907C28.5621 20.0651 28.2369 20.0004 27.9086 20.0004C27.5802 20.0004 27.2551 20.0651 26.9518 20.1907C26.6484 20.3164 26.3728 20.5006 26.1406 20.7328L23.0156 23.8578L16.1406 16.9828C15.6718 16.5143 15.0362 16.2512 14.3734 16.2512C13.7107 16.2512 13.075 16.5143 12.6062 16.9828L6.25 23.3391V8.75H33.75ZM6.25 26.875L14.375 18.75L26.875 31.25H6.25V26.875ZM33.75 31.25H30.4109L24.7859 25.625L27.9109 22.5L33.75 28.3406V31.25ZM22.5 15.625C22.5 15.2542 22.61 14.8916 22.816 14.5833C23.022 14.275 23.3149 14.0346 23.6575 13.8927C24.0001 13.7508 24.3771 13.7137 24.7408 13.786C25.1045 13.8584 25.4386 14.037 25.7008 14.2992C25.963 14.5614 26.1416 14.8955 26.214 15.2592C26.2863 15.6229 26.2492 15.9999 26.1073 16.3425C25.9654 16.6851 25.725 16.978 25.4167 17.184C25.1084 17.39 24.7458 17.5 24.375 17.5C23.8777 17.5 23.4008 17.3025 23.0492 16.9508C22.6975 16.5992 22.5 16.1223 22.5 15.625Z"
										fill="#633CFF"
									/>
								</svg>
							)}

							{isDragActive ? (
								<div className="flex justify-center">
									<div className="animate-bounce aling-center bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
										<svg
											className="w-6 h-6 text-violet-500"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
										</svg>
									</div>
								</div>
							) : (
								<div className="mt-2 flex  text-center">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md  font-semibold  focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-600 focus-within:ring-offset-2 hover:text-slate-500"
									>
										<span className="text-heading-s  text-purple">+Upload images</span>
										<input {...getInputProps()} id="file-upload" name="file-upload" className="sr-only" />
									</label>
								</div>
							)}
						</div>
					)}

					{!!files.length && (
						<div className="relative">
							<Image
								alt={files[0]?.name}
								src={files[0]?.preview}
								width={600}
								height={600}
								className="rounded-md h-[193px] w-[193px] object-cover"
							/>
							<label
								htmlFor="file-upload"
								className="absolute top-0 z-50 bg-black/30 h-full left-0 right-0  cursor-pointer rounded-md  font-semibold  focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-600 focus-within:ring-offset-2 hover:text-slate-500"
							>
								<div className=" group text-white h-full ">
									<div className="flex flex-col h-full justify-center items-center group-hover:text-gray-200 transition-colors text-center">
										<svg
											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M33.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V31.25C3.75 31.913 4.01339 32.5489 4.48223 33.0178C4.95107 33.4866 5.58696 33.75 6.25 33.75H33.75C34.413 33.75 35.0489 33.4866 35.5178 33.0178C35.9866 32.5489 36.25 31.913 36.25 31.25V8.75C36.25 8.08696 35.9866 7.45107 35.5178 6.98223C35.0489 6.51339 34.413 6.25 33.75 6.25ZM33.75 8.75V24.8047L29.6766 20.7328C29.4444 20.5006 29.1688 20.3164 28.8654 20.1907C28.5621 20.0651 28.2369 20.0004 27.9086 20.0004C27.5802 20.0004 27.2551 20.0651 26.9518 20.1907C26.6484 20.3164 26.3728 20.5006 26.1406 20.7328L23.0156 23.8578L16.1406 16.9828C15.6718 16.5143 15.0362 16.2512 14.3734 16.2512C13.7107 16.2512 13.075 16.5143 12.6062 16.9828L6.25 23.3391V8.75H33.75ZM6.25 26.875L14.375 18.75L26.875 31.25H6.25V26.875ZM33.75 31.25H30.4109L24.7859 25.625L27.9109 22.5L33.75 28.3406V31.25ZM22.5 15.625C22.5 15.2542 22.61 14.8916 22.816 14.5833C23.022 14.275 23.3149 14.0346 23.6575 13.8927C24.0001 13.7508 24.3771 13.7137 24.7408 13.786C25.1045 13.8584 25.4386 14.037 25.7008 14.2992C25.963 14.5614 26.1416 14.8955 26.214 15.2592C26.2863 15.6229 26.2492 15.9999 26.1073 16.3425C25.9654 16.6851 25.725 16.978 25.4167 17.184C25.1084 17.39 24.7458 17.5 24.375 17.5C23.8777 17.5 23.4008 17.3025 23.0492 16.9508C22.6975 16.5992 22.5 16.1223 22.5 15.625Z"
												fill="currentColor"
											/>
										</svg>
										<span className="text-heading-s   0">Change Image</span>
										<input {...getInputProps()} id="file-upload" name="file-upload" className="sr-only" />
									</div>
								</div>
							</label>
						</div>
					)}
				</div>

				<label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
					{!files.length ? "Image Not Uploaded" : "Image Uploaded"}
				</label>
			</div>
		</div>
	);
}
