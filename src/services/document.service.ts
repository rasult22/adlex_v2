/**
 * Document Service
 * Handles document upload and management
 */

import api from './api';
import type {
  PassportUploadResponse,
  PassportListResponse,
} from '@/types/backend';

// File upload constraints
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png'];

/**
 * Document Service
 * Manages passport and document uploads
 */
const documentService = {
  /**
   * Upload a passport scan
   *
   * @param sessionId - Current session identifier
   * @param file - File to upload
   * @returns Upload response with document details
   * @throws Error if file validation fails
   */
  async uploadPassport(sessionId: string, file: File): Promise<PassportUploadResponse> {
    // Validate file before upload
    this.validateFile(file);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);

      // Upload with session_id as query parameter
      const response = await api.post<PassportUploadResponse>(
        '/documents/passport/upload',
        formData,
        {
          params: { session_id: sessionId },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Passport upload error:', error);
      throw error;
    }
  },

  /**
   * List all uploaded passports for a session
   *
   * @param sessionId - Session identifier
   * @returns List of uploaded documents
   */
  async listPassports(sessionId: string): Promise<PassportListResponse> {
    try {
      const response = await api.get<PassportListResponse>(
        `/documents/passport/list/${sessionId}`
      );

      return response.data;
    } catch (error) {
      console.error('List passports error:', error);
      throw error;
    }
  },

  /**
   * Delete an uploaded passport
   *
   * @param sessionId - Session identifier
   * @param documentId - Document identifier to delete
   */
  async deletePassport(sessionId: string, documentId: string): Promise<void> {
    try {
      await api.delete(`/documents/passport/${sessionId}/${documentId}`);
    } catch (error) {
      console.error('Delete passport error:', error);
      throw error;
    }
  },

  /**
   * Validate file before upload
   *
   * @param file - File to validate
   * @throws Error if file is invalid
   */
  validateFile(file: File): void {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(
        `File size exceeds maximum allowed size of ${MAX_FILE_SIZE / (1024 * 1024)}MB`
      );
    }

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      const fileName = file.name.toLowerCase();
      const hasValidExtension = ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));

      if (!hasValidExtension) {
        throw new Error(
          `Invalid file type. Allowed types: ${ALLOWED_EXTENSIONS.join(', ')}`
        );
      }
    }

    // Check if file is empty
    if (file.size === 0) {
      throw new Error('File is empty');
    }
  },

  /**
   * Format file size for display
   *
   * @param bytes - File size in bytes
   * @returns Formatted file size string
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  },

  /**
   * Get file extension from filename
   *
   * @param filename - Filename to extract extension from
   * @returns File extension including the dot
   */
  getFileExtension(filename: string): string {
    const lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1) return '';
    return filename.substring(lastDotIndex).toLowerCase();
  },

  /**
   * Check if file type is allowed
   *
   * @param filename - Filename to check
   * @returns True if file type is allowed
   */
  isFileTypeAllowed(filename: string): boolean {
    const extension = this.getFileExtension(filename);
    return ALLOWED_EXTENSIONS.includes(extension);
  },

  /**
   * Get maximum allowed file size
   *
   * @returns Maximum file size in bytes
   */
  getMaxFileSize(): number {
    return MAX_FILE_SIZE;
  },

  /**
   * Get allowed file extensions
   *
   * @returns Array of allowed file extensions
   */
  getAllowedExtensions(): string[] {
    return [...ALLOWED_EXTENSIONS];
  },
};

export default documentService;
