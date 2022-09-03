FROM node:lts-alpine AS BUILD
FROM node:lts-alpine AS DEPS
FROM node:lts-alpine AS RUNTIME