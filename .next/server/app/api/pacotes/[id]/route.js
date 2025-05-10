/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/pacotes/[id]/route";
exports.ids = ["app/api/pacotes/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/pacotes/[id]/route.js":
/*!***************************************!*\
  !*** ./app/api/pacotes/[id]/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./lib/auth.js\");\n\n\n\n\n// GET - Retorna um pacote específico pelo ID\nasync function GET(request, { params }) {\n    try {\n        const pacote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pacote.findUnique({\n            where: {\n                id: params.id\n            }\n        });\n        if (!pacote) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Pacote não encontrado'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(pacote);\n    } catch (error) {\n        console.error('Error fetching pacote:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Erro ao buscar pacote'\n        }, {\n            status: 500\n        });\n    }\n}\n// PATCH - Atualiza um pacote existente (requer autenticação)\nasync function PATCH(request, { params }) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Não autorizado'\n            }, {\n                status: 401\n            });\n        }\n        const data = await request.json();\n        // Verificar se o pacote existe\n        const existingPacote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pacote.findUnique({\n            where: {\n                id: params.id\n            }\n        });\n        if (!existingPacote) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Pacote não encontrado'\n            }, {\n                status: 404\n            });\n        }\n        // Atualizar o pacote\n        const updatedPacote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pacote.update({\n            where: {\n                id: params.id\n            },\n            data: {\n                nome: data.nome !== undefined ? data.nome : existingPacote.nome,\n                descricao: data.descricao !== undefined ? data.descricao : existingPacote.descricao,\n                preco: data.preco !== undefined ? parseFloat(data.preco) : existingPacote.preco,\n                vagasDisponiveis: data.vagasDisponiveis !== undefined ? parseInt(data.vagasDisponiveis) : existingPacote.vagasDisponiveis,\n                vagasTotais: data.vagasTotais !== undefined ? parseInt(data.vagasTotais) : existingPacote.vagasTotais,\n                imagemUrl: data.imagemUrl !== undefined ? data.imagemUrl : existingPacote.imagemUrl,\n                destaque: data.destaque !== undefined ? data.destaque : existingPacote.destaque,\n                datasPossiveis: data.datasPossiveis !== undefined ? data.datasPossiveis : existingPacote.datasPossiveis\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedPacote);\n    } catch (error) {\n        console.error('Error updating pacote:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Erro ao atualizar pacote'\n        }, {\n            status: 500\n        });\n    }\n}\n// DELETE - Remove um pacote (requer autenticação)\nasync function DELETE(request, { params }) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Não autorizado'\n            }, {\n                status: 401\n            });\n        }\n        // Verificar se o pacote existe\n        const existingPacote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pacote.findUnique({\n            where: {\n                id: params.id\n            }\n        });\n        if (!existingPacote) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Pacote não encontrado'\n            }, {\n                status: 404\n            });\n        }\n        // Excluir o pacote\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pacote.delete({\n            where: {\n                id: params.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Pacote excluído com sucesso'\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error deleting pacote:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Erro ao excluir pacote'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXV0aCc7XG5cbi8vIEdFVCAtIFJldG9ybmEgdW0gcGFjb3RlIGVzcGVjw61maWNvIHBlbG8gSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCwgeyBwYXJhbXMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHBhY290ZSA9IGF3YWl0IHByaXNtYS5wYWNvdGUuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogcGFyYW1zLmlkXG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKCFwYWNvdGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ1BhY290ZSBuw6NvIGVuY29udHJhZG8nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHBhY290ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGFjb3RlOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRXJybyBhbyBidXNjYXIgcGFjb3RlJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuXG4vLyBQQVRDSCAtIEF0dWFsaXphIHVtIHBhY290ZSBleGlzdGVudGUgKHJlcXVlciBhdXRlbnRpY2HDp8OjbylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXF1ZXN0LCB7IHBhcmFtcyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIFxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnTsOjbyBhdXRvcml6YWRvJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBcbiAgICAvLyBWZXJpZmljYXIgc2UgbyBwYWNvdGUgZXhpc3RlXG4gICAgY29uc3QgZXhpc3RpbmdQYWNvdGUgPSBhd2FpdCBwcmlzbWEucGFjb3RlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5pZFxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGlmICghZXhpc3RpbmdQYWNvdGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ1BhY290ZSBuw6NvIGVuY29udHJhZG8nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQXR1YWxpemFyIG8gcGFjb3RlXG4gICAgY29uc3QgdXBkYXRlZFBhY290ZSA9IGF3YWl0IHByaXNtYS5wYWNvdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXJhbXMuaWRcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5vbWU6IGRhdGEubm9tZSAhPT0gdW5kZWZpbmVkID8gZGF0YS5ub21lIDogZXhpc3RpbmdQYWNvdGUubm9tZSxcbiAgICAgICAgZGVzY3JpY2FvOiBkYXRhLmRlc2NyaWNhbyAhPT0gdW5kZWZpbmVkID8gZGF0YS5kZXNjcmljYW8gOiBleGlzdGluZ1BhY290ZS5kZXNjcmljYW8sXG4gICAgICAgIHByZWNvOiBkYXRhLnByZWNvICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KGRhdGEucHJlY28pIDogZXhpc3RpbmdQYWNvdGUucHJlY28sXG4gICAgICAgIHZhZ2FzRGlzcG9uaXZlaXM6IGRhdGEudmFnYXNEaXNwb25pdmVpcyAhPT0gdW5kZWZpbmVkID8gcGFyc2VJbnQoZGF0YS52YWdhc0Rpc3Bvbml2ZWlzKSA6IGV4aXN0aW5nUGFjb3RlLnZhZ2FzRGlzcG9uaXZlaXMsXG4gICAgICAgIHZhZ2FzVG90YWlzOiBkYXRhLnZhZ2FzVG90YWlzICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChkYXRhLnZhZ2FzVG90YWlzKSA6IGV4aXN0aW5nUGFjb3RlLnZhZ2FzVG90YWlzLFxuICAgICAgICBpbWFnZW1Vcmw6IGRhdGEuaW1hZ2VtVXJsICE9PSB1bmRlZmluZWQgPyBkYXRhLmltYWdlbVVybCA6IGV4aXN0aW5nUGFjb3RlLmltYWdlbVVybCxcbiAgICAgICAgZGVzdGFxdWU6IGRhdGEuZGVzdGFxdWUgIT09IHVuZGVmaW5lZCA/IGRhdGEuZGVzdGFxdWUgOiBleGlzdGluZ1BhY290ZS5kZXN0YXF1ZSxcbiAgICAgICAgZGF0YXNQb3NzaXZlaXM6IGRhdGEuZGF0YXNQb3NzaXZlaXMgIT09IHVuZGVmaW5lZCA/IGRhdGEuZGF0YXNQb3NzaXZlaXMgOiBleGlzdGluZ1BhY290ZS5kYXRhc1Bvc3NpdmVpc1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkUGFjb3RlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwYWNvdGU6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdFcnJvIGFvIGF0dWFsaXphciBwYWNvdGUnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbi8vIERFTEVURSAtIFJlbW92ZSB1bSBwYWNvdGUgKHJlcXVlciBhdXRlbnRpY2HDp8OjbylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCwgeyBwYXJhbXMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICBcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ07Do28gYXV0b3JpemFkbycgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBWZXJpZmljYXIgc2UgbyBwYWNvdGUgZXhpc3RlXG4gICAgY29uc3QgZXhpc3RpbmdQYWNvdGUgPSBhd2FpdCBwcmlzbWEucGFjb3RlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5pZFxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGlmICghZXhpc3RpbmdQYWNvdGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ1BhY290ZSBuw6NvIGVuY29udHJhZG8nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRXhjbHVpciBvIHBhY290ZVxuICAgIGF3YWl0IHByaXNtYS5wYWNvdGUuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXJhbXMuaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6ICdQYWNvdGUgZXhjbHXDrWRvIGNvbSBzdWNlc3NvJyB9LFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwYWNvdGU6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdFcnJvIGFvIGV4Y2x1aXIgcGFjb3RlJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJwYWNvdGUiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNvbnNvbGUiLCJQQVRDSCIsInNlc3Npb24iLCJkYXRhIiwiZXhpc3RpbmdQYWNvdGUiLCJ1cGRhdGVkUGFjb3RlIiwidXBkYXRlIiwibm9tZSIsInVuZGVmaW5lZCIsImRlc2NyaWNhbyIsInByZWNvIiwicGFyc2VGbG9hdCIsInZhZ2FzRGlzcG9uaXZlaXMiLCJwYXJzZUludCIsInZhZ2FzVG90YWlzIiwiaW1hZ2VtVXJsIiwiZGVzdGFxdWUiLCJkYXRhc1Bvc3NpdmVpcyIsIkRFTEVURSIsImRlbGV0ZSIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/pacotes/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Senha\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials.email || !credentials.password) {\n                    return null;\n                }\n                try {\n                    // Check if the user exists in the database\n                    const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    // If user doesn't exist or password doesn't match\n                    if (!user || !user.password) {\n                        return null;\n                    }\n                    // Compare the provided password with the hashed password in the database\n                    const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password);\n                    if (!passwordMatch) {\n                        return null;\n                    }\n                    // Return the user object excluding the password\n                    return {\n                        id: user.id,\n                        name: user.name,\n                        email: user.email,\n                        role: user.role\n                    };\n                } catch (error) {\n                    console.error(\"Error during authentication:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    secret: process.env.NEXTAUTH_SECRET || \"a-very-strong-secret-key-that-should-be-changed\",\n    session: {\n        strategy: 'jwt',\n        maxAge: 30 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: '/admin/login',\n        error: '/admin/login'\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // Add role and other user data to the token\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Add role to the session\n            if (token && session.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBEO0FBQ0Y7QUFDVTtBQUNwQztBQUNGO0FBRXJCLE1BQU1LLGNBQWM7SUFDekJDLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSTtRQUNwRDtRQUNBViwyRUFBbUJBLENBQUM7WUFDbEJXLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVNDLE1BQU07Z0JBQVc7WUFDL0M7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLFlBQVlDLEtBQUssSUFBSSxDQUFDRCxZQUFZSSxRQUFRLEVBQUU7b0JBQy9DLE9BQU87Z0JBQ1Q7Z0JBRUEsSUFBSTtvQkFDRiwyQ0FBMkM7b0JBQzNDLE1BQU1FLE9BQU8sTUFBTWpCLCtDQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7d0JBQ3hDQyxPQUFPOzRCQUNMUCxPQUFPRCxZQUFZQyxLQUFLO3dCQUMxQjtvQkFDRjtvQkFFQSxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQ0ssUUFBUSxDQUFDQSxLQUFLRixRQUFRLEVBQUU7d0JBQzNCLE9BQU87b0JBQ1Q7b0JBRUEseUVBQXlFO29CQUN6RSxNQUFNSyxnQkFBZ0IsTUFBTW5CLHFEQUFjLENBQUNVLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtvQkFFOUUsSUFBSSxDQUFDSyxlQUFlO3dCQUNsQixPQUFPO29CQUNUO29CQUVBLGdEQUFnRDtvQkFDaEQsT0FBTzt3QkFDTEUsSUFBSUwsS0FBS0ssRUFBRTt3QkFDWFosTUFBTU8sS0FBS1AsSUFBSTt3QkFDZkUsT0FBT0ssS0FBS0wsS0FBSzt3QkFDakJXLE1BQU1OLEtBQUtNLElBQUk7b0JBQ2pCO2dCQUNGLEVBQUUsT0FBT0MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7b0JBQzlDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREUsU0FBUzdCLHdFQUFhQSxDQUFDRywrQ0FBTUE7SUFDN0IyQixRQUFRdEIsUUFBUUMsR0FBRyxDQUFDc0IsZUFBZSxJQUFJO0lBQ3ZDQyxTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUlQsT0FBTztJQUNUO0lBQ0FVLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRW5CLElBQUksRUFBRTtZQUN2Qiw0Q0FBNEM7WUFDNUMsSUFBSUEsTUFBTTtnQkFDUm1CLE1BQU1iLElBQUksR0FBR04sS0FBS00sSUFBSTtZQUN4QjtZQUNBLE9BQU9hO1FBQ1Q7UUFDQSxNQUFNUCxTQUFRLEVBQUVBLE9BQU8sRUFBRU8sS0FBSyxFQUFFO1lBQzlCLDBCQUEwQjtZQUMxQixJQUFJQSxTQUFTUCxRQUFRWixJQUFJLEVBQUU7Z0JBQ3pCWSxRQUFRWixJQUFJLENBQUNNLElBQUksR0FBR2EsTUFBTWIsSUFBSTtZQUNoQztZQUNBLE9BQU9NO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvbGliL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuL3ByaXNtYSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgfHwgXCJcIixcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiU2VuaGFcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscy5lbWFpbCB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgZXhpc3RzIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBJZiB1c2VyIGRvZXNuJ3QgZXhpc3Qgb3IgcGFzc3dvcmQgZG9lc24ndCBtYXRjaFxuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29tcGFyZSB0aGUgcHJvdmlkZWQgcGFzc3dvcmQgd2l0aCB0aGUgaGFzaGVkIHBhc3N3b3JkIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgICBpZiAoIXBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgZXhjbHVkaW5nIHRoZSBwYXNzd29yZFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBhdXRoZW50aWNhdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCBcImEtdmVyeS1zdHJvbmctc2VjcmV0LWtleS10aGF0LXNob3VsZC1iZS1jaGFuZ2VkXCIsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hZG1pbi9sb2dpbicsXG4gICAgZXJyb3I6ICcvYWRtaW4vbG9naW4nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBBZGQgcm9sZSBhbmQgb3RoZXIgdXNlciBkYXRhIHRvIHRoZSB0b2tlblxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICAvLyBBZGQgcm9sZSB0byB0aGUgc2Vzc2lvblxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInBhc3N3b3JkTWF0Y2giLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRhcHRlciIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n// Learn more: https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nlet prisma;\nif (false) {} else {\n    if (!globalForPrisma.prisma) {\n        globalForPrisma.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = globalForPrisma.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLDREQUE0RDtBQUU1RCxNQUFNQyxrQkFBa0JDO0FBRXhCLElBQUlDO0FBRUosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDSCxnQkFBZ0JFLE1BQU0sRUFBRTtRQUMzQkYsZ0JBQWdCRSxNQUFNLEdBQUcsSUFBSUgsd0RBQVlBO0lBQzNDO0lBQ0FHLFNBQVNGLGdCQUFnQkUsTUFBTTtBQUNqQztBQUVBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2xpYi9wcmlzbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbi8vIExlYXJuIG1vcmU6IGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWw7XG5cbmxldCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsRm9yUHJpc21hLnByaXNtYSkge1xuICAgIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&page=%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&page=%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_pacotes_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/pacotes/[id]/route.js */ \"(rsc)/./app/api/pacotes/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/pacotes/[id]/route\",\n        pathname: \"/api/pacotes/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/pacotes/[id]/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/pacotes/[id]/route.js\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_pacotes_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYWNvdGVzJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBhY290ZXMlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBhY290ZXMlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvcGFjb3Rlcy9baWRdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wYWNvdGVzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wYWNvdGVzL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3BhY290ZXMvW2lkXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXBwL2FwaS9wYWNvdGVzL1tpZF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&page=%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&page=%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpacotes%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();