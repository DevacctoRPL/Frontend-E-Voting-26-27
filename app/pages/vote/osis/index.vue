<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 py-10 text-center">
    <nav class="flex flex-col items-center gap-4">
      <ButtonVote
        to="/vote/osis/paslon01"
        variant="secondary"
        size="md"
      >
        DETAIL PASLON 1
      </ButtonVote>

      <ButtonVote
        to="/vote/osis/paslon02"
        variant="secondary"
        size="md"
      >
        DETAIL PASLON 2
      </ButtonVote>

      <ButtonVote
        to="/vote/osis/vote"
        variant="vote"
        size="md"
      >
        LANGSUNG VOTE
      </ButtonVote>
    </nav>

    <footer class="flex justify-center">
      <ButtonVote
        to="/vote/mpk/vote"
        variant="back"
        size="md"
      >
        BACK
      </ButtonVote>
    </footer>
  </main>
</template>
