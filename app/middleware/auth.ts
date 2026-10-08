export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) {
    return
  }

  const { isAuthenticated, getVotingStatus, clearSession } = useAuth()

  if (!isAuthenticated()) {
    return navigateTo('/login')
  }

  let status

  try {
    status = await getVotingStatus()
  } catch {
    clearSession()
    return navigateTo('/login')
  }

  if (
    !status ||
    typeof status.sudah_vote_mpk !== 'boolean' ||
    typeof status.sudah_vote_osis !== 'boolean'
  ) {
    clearSession()
    return navigateTo('/login')
  }

  const hasVotedMpk = status.sudah_vote_mpk === true
  const hasVotedOsis = status.sudah_vote_osis === true
  const isMpkRoute = to.path === '/vote/mpk' || to.path.startsWith('/vote/mpk/')
  const isOsisRoute = to.path === '/vote/osis' || to.path.startsWith('/vote/osis/')

  if (isMpkRoute && (hasVotedMpk || hasVotedOsis)) {
    return navigateTo(
      hasVotedMpk && hasVotedOsis
        ? '/vote/success'
        : hasVotedMpk
          ? '/vote/osis/paslon01'
          : '/login'
    )
  }

  if (isOsisRoute && (!hasVotedMpk || hasVotedOsis)) {
    return navigateTo(
      hasVotedMpk && hasVotedOsis
        ? '/vote/success'
        : hasVotedMpk
          ? '/vote/osis/paslon01'
          : '/vote/mpk/paslon01'
    )
  }

  if (to.path === '/vote/success' && !(hasVotedMpk && hasVotedOsis)) {
    return navigateTo(
      hasVotedMpk
        ? '/vote/osis/paslon01'
        : '/vote/mpk/paslon01'
    )
  }
})