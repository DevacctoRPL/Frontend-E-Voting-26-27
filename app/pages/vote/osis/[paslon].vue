<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 py-10 text-center">
    <nav class="flex items-center justify-center gap-4">
      <ButtonVote
        to="/vote/osis"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>

      <ButtonVote
        to="/vote/osis/vote"
        variant="next"
        size="md"
      >
        NEXT
      </ButtonVote>
    </nav>
  </main>
</template>
